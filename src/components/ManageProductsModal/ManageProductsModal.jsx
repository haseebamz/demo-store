import React from 'react'
import ProductSave from '../ManageStore/ProductSave'

function ManageProductsModal({ product, onClose }) {
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-box manageProductModal">
                    <button onClick={onClose} className='closeModal'  >X</button>
                              
                    <ProductSave  product={product} />                    
                   

                </div>
            </div>

        </>
    )
}

export default ManageProductsModal