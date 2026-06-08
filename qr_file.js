import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  Document,
  Packer,
  Paragraph,
  ImageRun,
  AlignmentType,
  TextRun,
} from "docx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fetch a URL and return it as a Buffer
const fetchImageBuffer = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch image: ${url}`);
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

export const makeQrFile = async (req, res) => {
  const data = req.body;

  try {
    const QR_WIDTH = 220;
    const QR_HEIGHT = 270;

    // Fetch all QR images in parallel
    const qrBuffers = await Promise.all(data.qrs.map(fetchImageBuffer));

    const children = [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: `Client: ${data.client}`,
            bold: true,
            size: 28,
          }),
        ],
        spacing: { after: 400 },
      }),
    ];

    const imageRuns = [];

    for (let i = 0; i < qrBuffers.length; i++) {
      imageRuns.push(
        new ImageRun({
          data: qrBuffers[i],
          type: "jpg",
          transformation: { width: QR_WIDTH, height: QR_HEIGHT },
        }),
      );

      // 2. Add spaces after every image, EXCEPT the last one
      if (i < qrBuffers.length - 1) {
        imageRuns.push(new TextRun({ text: "    " }));
      }
    }

    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: imageRuns,
        spacing: { after: 400 },
      }),
    );

    children.push(new Paragraph({children:[]}))

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              size: { width: 11906, height: 16838 },
              margin: { top: 567, right: 567, bottom: 567, left: 567 },
            },
          },
          children,
        },
      ],
    });

    const rand = Math.round(Math.random() * 100);
    const outputPath = path.resolve(
      __dirname,
      "../tmp",
      `qr_output_${rand}.docx`,
    );

    const buff = await Packer.toBuffer(doc);
    fs.writeFileSync(outputPath, buff);

    res.status(200).json({ msg: "success", file: `qr_output_${rand}.docx` });
  } catch (error) {
    console.error("makeQrFile error:", error);
    res.status(500).json({ error: error.message });
  }
};
