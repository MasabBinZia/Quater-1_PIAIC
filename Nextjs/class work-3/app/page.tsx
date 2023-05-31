import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Home() {
  return (
    <>
    <Menubar className="Menubar text-white justify-center ">
      <MenubarMenu>
        <MenubarTrigger>Home</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>About Me</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Contact</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
    <div className="mt-6 ml-4 text-white">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
    Masab Bin Zia .
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      👋 Hi there! I'm Masab Bin Zia,
       a Junior Frontend Developer and 
       Computer Science student passionate about creating beautiful and functional web applications.
      </p>
      </div>
    </>
  )
}