const Car=(prpty) => {
    return (
      <div>
        <h2>Car model - {prpty.model}</h2>
  
        {prpty.price && //if have price then show price(Conditional rendaring)
          <p>Price - {prpty.price}</p>
        }
      </div>
    )
  }

export default Car;