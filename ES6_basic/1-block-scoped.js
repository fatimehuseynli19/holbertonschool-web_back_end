export default function taskBlock(trueOrFalse) {
  const task = [false, true];

  if (trueOrFalse) {
    task[0] = true;
    task[1] = false;
  }

  return task;
}
