import { useContext } from "react";
import { AppContextt } from "../Context/AppContextt";


function Pagination() {
    const { page, handlePageChange, totalPages } = useContext(AppContextt)
    return (
        <div className="w-full flex justify-center items-center border fixed bottom-0 bg-white ">
            <div className="flex flex-row justify-between w-11/12 max-w-[660px] py-3 items-center">
                <p className="flex gap-x-7">
                    {page > 1 &&
                        (<button className="rounded border-2 px-1 py-1 border-black" onClick={() => {
                            handlePageChange(page- 1)
                        }}>
                            Previous</button>
                        )
                    }
                    {
                        page < totalPages &&
                        (
                            <button className="rounded border-2 px-1 py-1 border-black" onClick={() => {
                                handlePageChange(page + 1)
                            }}>Next</button>

                        )
                    }
                </p>
                <p className="font-bold">
                    Page {page} of {totalPages}
                </p>

            </div>

        </div>
    );
}

export default Pagination;