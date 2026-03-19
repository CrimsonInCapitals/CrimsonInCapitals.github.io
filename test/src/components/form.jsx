




export const Iframe = ({ src, title, width = "100%", height = "500px", allowFullScreen = false }) => {
  if (!src || typeof src !== "string") {
    return <p style={{ color: "red" }}>Invalid iframe source URL.</p>;
  }

  return (
    <iframe
      src={src}
      title={title || "Embedded Content"}
      width={width}
      height={height}
      style={{
        border: "none",
        display: "block",
      }}
      allowFullScreen={allowFullScreen}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-popups"
    />
  );
};



export const FormSection = ()=>{
    return(
        <section style={{padding:0, maxWidth:'unset',width:'100%'}}>
            <Iframe  
                height="600px" 
                loading="lazy" 
                sandbox="allow-scripts allow-same-origin allow-popups" 
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=PVrSvFVk9kuGq0BPcav-Kk0pObX2bN1CnuXKv3C-EpdUOVI5S0ZGSlgzM0JUU0E1SVBJUVU4MDVaUS4u&embed=true" 

                className='iframe'
            />      
        </section>
    )
}