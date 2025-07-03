import React from 'react'

const ProductDetails = ({ setSelectedProduct, selectedProduct, renderStars }) => {
    return (
        <div>
            <div class="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[800px]">
                            <div class="bg-white">

                                <div class="text-center sm:mt-0 sm:text-left">
                                    <img src={selectedProduct.thumbnail} alt='thumbnail' className='w-full' />
                                    <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                                        <h3 class="text-3xl font-semibold text-gray-900" id="dialog-title">{selectedProduct.title}</h3>
                                        <div class="mt-2">
                                            <p class="text-[21px] text-gray-500">{selectedProduct.description}</p>

                                        </div>
                                        <div className="mt-4 text-[21px]">
                                            {renderStars(selectedProduct.rating)}
                                        </div>
                                        <h3 class="text-2xl mt-2 font-semibold text-gray-900" id="dialog-title">{selectedProduct.price}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 cursor-pointer" onClick={() => setSelectedProduct(null)}>
                                <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails