import { Scanner } from "./scanner";
import { convertToGif } from "./convert";

async function main() {
  const scanner = new Scanner();

  const inputPath = await scanner.nextLine("Nome do arquivo de vídeo: ");
  const outputPath = await scanner.nextLine("Nome do GIF de saída: ");
  const startTime = await scanner.nextDouble("Segundos iniciais (ex: 2): ");
  const duration = await scanner.nextDouble("Duração em segundos (ex: 6): ");
  const scale = await scanner.nextInt("Largura (ex: 480): ");

  await convertToGif({ inputPath, outputPath, startTime, duration, scale });

  scanner.close();
}

main();
