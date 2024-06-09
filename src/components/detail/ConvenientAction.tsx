"use client";

function ConvenientAction() {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='size-[100px]'>
                    <div
                        className='animate-spin w-full h-full border-2 rounded-full border-slate-800 border-t-4 border-t-orange-600'
                        style={{
                            animationDuration: "3s",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default ConvenientAction;
