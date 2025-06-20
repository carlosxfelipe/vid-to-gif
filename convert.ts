export async function convertToGif({
  inputPath,
  outputPath,
  startTime,
  duration,
  scale,
}: {
  inputPath: string;
  outputPath: string;
  startTime: number;
  duration: number;
  scale: number;
}) {
  const args = [
    "-ss",
    startTime.toString(),
    "-t",
    duration.toString(),
    "-i",
    inputPath,
    "-vf",
    `scale=${scale}:-1`,
    outputPath,
  ];

  const ffmpegPath = "/opt/homebrew/bin/ffmpeg";

  const ffmpegProc = Bun.spawn([ffmpegPath, ...args], {
    stdout: "inherit",
    stderr: "inherit",
  });

  const exitCode = await ffmpegProc.exited;

  if (exitCode === 0) {
    console.log(`GIF criado com sucesso: ${outputPath}`);
  } else {
    console.error("Erro na execução do FFmpeg");
  }
}
