import { homedir } from 'os';
import fs from 'fs';

export default function getConfig() {
  const HOME_DIR = homedir();
  let deviceConfigFilePath = HOME_DIR + '/.deviceConfig.json';
  let configData = fs.readFileSync(deviceConfigFilePath, 'utf-8');
  return JSON.parse(configData);
}
