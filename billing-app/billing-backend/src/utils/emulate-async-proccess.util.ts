import { firstValueFrom, map, timer } from 'rxjs';

export async function emulateAsyncProcess(
  message: string,
  target: any,
): Promise<void> {
  console.log(message);
  console.log(`process started ... `);
  const observable = timer(100).pipe(
    map(() => {
      console.log(`process completed successfully!!`);
      console.log(JSON.stringify(target, null, 2));
    }),
  );
  return firstValueFrom(observable);
}
