import Card from './Card';


function Tours({tours,removeTour}){
    return ( <div className='container'>
          <div><h1 className='title'>Plan With Love</h1></div>
          <div className='cards'>
            {
                tours.map((tour)=>{
                    return (
                        <Card {...tour} key={tours.id} removeTour={removeTour}></Card>
                    );
                })
            }
          </div>
        
        
        
        </div>

    );
};
export default Tours;