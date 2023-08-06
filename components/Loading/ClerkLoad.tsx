
import { Skeleton } from '@/components/ui/skeleton';

import Image from 'next/image';

export default function ClerkLoad() {
  return (
    <div className="w-full h-screen grid place-content-center dark:!bg-primary2/[.03] dark:!bg-opacity-20">
      <div className="grid grid-cols-1 gap-8 justify-items-center">
        <div className="place-self-center w-[300px] h-[100px]">
          <Image
            // src="/images/logo/logo-2.svg"
            src="/images/logo/nlogo-black.svg"
            alt="logo"
            width={40}
            height={30}
            className="w-full dark:hidden"
          />
          <Image
            //  src="/images/logo/logo.svg"
            src="/images/logo/nlogo-white.svg"
            alt="logo"
            width={140}
            height={30}
            className="hidden w-full dark:block"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 justify-items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl">Loading Page</h1>
          <Skeleton className="h-12 w-12 rounded-full dark:bg-white bg-slate-600" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] rounded-xl dark:bg-white bg-slate-600" />
            <Skeleton className="h-4 w-[200px] rounded-xl dark:bg-white bg-slate-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
