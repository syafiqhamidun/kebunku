import Navbar from "@/components/navbar/navbar"

export default function Home() {
  return (
    <body className=" bg-yellow-400">
      <div>
      <Navbar/>

      </div>
    </body>
    
    
  )
}


/* <body className="min-h-screen bg-[#D4E8D1] font-sans antialiased__variable_a64ecd">
<div className="relative flex min-h-screen flex-col">
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className=" flex h-16 justify-between">
      <div className="mr-4 md:flex">
        <Button variant={"ghost"} className="font-s" >KEBUNKU</Button>
          <ul>
            <li><Button>About Us</Button></li>
            <li><Button>Contact Us</Button></li>
          </ul>
        <Button className="md:flex items-end">LOGIN</Button>
      </div>
    </div>
  </header>
</div>
</body> */