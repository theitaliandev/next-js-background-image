import Image from 'next/image'


export default function Home() {
  return (
    <>
      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
        <Image 
          src="/bg.webp"
          alt="Mountains with snow"
          layout="fill"
          objectFit='cover'
        />
      </div>
      <h1 style={{
        paddingTop: "30vh",
        fontFamily: "monospace",
        fontSize: "3.5rem",
        fontWeight: "bold",
        textAlign: "center"
      }}>Next.js Background Image Tutorial</h1>
    </>
  )
}
