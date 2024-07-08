import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>
        Default
      </Button>
      <Button variant='primary'>
        Primary
      </Button>
      <Button variant='primaryOutline'>
        Primary Outline
      </Button>
    </div>
  )
}
