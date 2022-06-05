import { firstValueFrom, map, timer } from 'rxjs';

export async function emulateAsyncProccess(
  message: string,
  target: any,
): Promise<void> {
  console.log(message);
  console.log(`proccess started ... `);
  const observable = timer(100).pipe(
    map(() => {
      console.log(`proccess completed successfully!!`);
      console.log(JSON.stringify(target, null, 2));
    }),
  );
  return firstValueFrom(observable);
}
