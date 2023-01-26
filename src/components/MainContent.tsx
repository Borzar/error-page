

export const MainContent = () => {
    return (
    <div className='mainContent'>
         <div>
            <img className="imagen" src="img.jpeg" alt="imagen de espantapajaro" />
        </div>   
        <div className="textContent">
          <h1 style={{ margin: 'auto'}} >I have bad news</h1>
          <p style={{ color: '#777F75' }} >The page you are looking for might be removed or is temporarily unavailable</p>
          <button style={{ marginTop: '50px', height: '50px', backgroundColor: 'black', color: 'white', fontFamily: 'Helvetica'}} >BACK TO HOMEPAGE</button> 
        </div>
    </div>
    )
}