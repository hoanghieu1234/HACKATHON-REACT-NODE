function Listproduct(props) {
  const products = props.contentList;

  const handleDelete = (id) => {
    props.onDelete(id);
  };

  return (
    <div className="product">
      {products !== null &&
        products.map((product, index) => {
          return (
            <div key={index} className="nameProduct">
              <div id="notes" className="row container-fluid">
                <label>{index + 1}</label>
                <label>{product.title}</label>
                <label>
                  <button
                    type="button"
                    class="btn btn-danger m-2"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </label>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Listproduct;
