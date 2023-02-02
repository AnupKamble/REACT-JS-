
function Pagination({ totalPages, currentPage, handleChangePage }) {

    return (

    <div data-testid="page-container">

     { PageLengthArray(totalPages).map((a) => (
          <button key={a}
                  disabled={a === currentPage}
                  onClick={() => { handleChangePage(a)}}
                  style={currentPage == a ? { border: "1px solid purple" } : null}

          >  {a} </button>
        ))
      } 
    
    </div>
    );
  }
  
  function PageLengthArray(totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  export default Pagination;