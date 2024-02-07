import './Aside.css';

function Aside() {
   
    return (

    <aside className="aside">
    <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZYZUm396kfg?si=oCUbISrBqSIJvVnw"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
    <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QF-hW65x4U4?si=if-j4RESMp68g3BH" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
         gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </aside> 

    );
}

export default Aside;
