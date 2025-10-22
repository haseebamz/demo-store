import React from 'react'
import AddProduct from '../ManageStore/AddProduct'
import EditProduct from '../ManageStore/EditProduct'

function ManageProductsModal({ product, onClose, mode }) {
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-box">
                    <button onClick={onClose} className='closeModal'  >X</button>
                    <div>                   

                        {mode === "edit" ? ( <EditProduct product={product} /> ) : <AddProduct product={product}/>  }
                        
                        
                    </div>

                </div>
            </div>

        </>
    )
}

export default ManageProductsModal