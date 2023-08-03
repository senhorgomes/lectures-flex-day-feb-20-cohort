function LanguageSelector(props) {
    return ( 
        <div>
            <button onClick={()=>props.setLangauge("English")}>English</button>
            <button onClick={()=>props.setLangauge("Japanese")}>Japanese</button>
            <button onClick={()=>props.setLangauge("Russian")}>Russian</button>
            <button onClick={()=>props.setLangauge("French")}>French</button>
            <button onClick={()=>props.setLangauge("Persian")}>Persian</button>
        </div>
     );
}

export default LanguageSelector;