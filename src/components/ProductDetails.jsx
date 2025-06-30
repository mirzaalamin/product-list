import React from 'react'

const ProductDetails = () => {
    return (
        <div>
            <button class="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10">Open dialog</button>

            <div class="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white">

                                <div class="mt-3 text-center sm:mt-0 sm:text-left">
                                    <img src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg" alt='thumbnail' />
                                    <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                                        <h3 class="text-base font-semibold text-gray-900" id="dialog-title">Premium Wireless Headphones</h3>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-500">High-quality noise-canceling headphones with premium sound quality and comfortable design.</p>
                                        </div>
                                        <h3 class="text-2xl mt-2 font-semibold text-gray-900" id="dialog-title">$199</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails