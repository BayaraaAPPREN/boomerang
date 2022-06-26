

export default function Section(){
    return(
        <div className="w-screen">
          <video className="w-full absolute top-0 left-0 h-full object-cover opacity-80" src="/cover.mp4" muted loop autoPlay></video>
          <div className="overlay absolute top-0 left-0 w-full h-full bg-overlay blend-screen"></div>
        </div>
    )
}