import React from "react";

const Products = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="triangle bg-zinc-50 h-5 w-4 absolute left-[29%] top-0" style={{ clipPath: 'polygon(50% 0%, 0 47%, 100% 47%)' }}></div>
        <div className="w-2/4 h-4/6 bg-white absolute border-solid border-4 border-zinc-50 left-[21%] top-2 rounded-lg flex">
          <div className="w-3/4 rounded-l-lg px-3 py-7">
            <div className="text-zinc-700 h-2/5">
              <h1 className="text-sm font-medium pl-4">GLOBAL PAYMENTS</h1>
              <div className="flex w-full">
                <div className="w-2/4 pl-[7vh] mt-4">
                  <h1 className="text-sm font-medium">Payments</h1>
                  <h1 className="text-sm font-light">Online payments</h1>
                  <h1 className="text-xs text-zinc-400 mt-3 bg-slate-100 p-1 px-2 rounded-sm w-4/5">
                    <span className="text-zinc-700 font-medium">
                      Payment Links •
                    </span>{" "}
                    No-code payments
                  </h1>
                  <h1 className="text-xs text-zinc-400 mt-1 bg-slate-100 p-1 px-2 rounded-sm w-4/5">
                    <span className="text-zinc-700 font-medium">
                      Checkout •
                    </span>{" "}
                    Pre-built payment form
                  </h1>
                  <h1 className="text-xs text-zinc-400 mt-1 bg-slate-100 p-1 px-2 rounded-sm w-4/5">
                    <span className="text-zinc-700 font-medium">
                      {" "}
                      Elements •
                    </span>{" "}
                    Flexible Ul components
                  </h1>
                </div>
                <div className="w-2/4 pl-[10vh] mt-4">
                  <h1 className="text-sm font-medium">Terminal</h1>
                  <h1 className="text-sm font-light">In-person payments</h1>
                  <h1 className="text-sm font-medium mt-3">Radar</h1>
                  <h1 className="text-sm font-light">Fraud prevention</h1>
                  <h1 className="text-sm font-medium mt-3">Authorization</h1>
                  <h1 className="text-sm font-light">Acceptance optimisations</h1>
                </div>
              </div>
              <hr className="mt-5" />
            </div>
            <div className="text-zinc-700 h-1/5">
              <h1 className="text-sm font-medium pl-4">
                EMBEDDED PAYMENTS AND FINANCE
              </h1>

              <div className="w-2/4 pl-[7vh] mt-4">
                <h1 className="text-sm font-medium">Connect</h1>
                <h1 className="text-sm font-light">Payments for platforms</h1>
              </div>
              <hr className="mt-5" />
            </div>
            <div className="text-zinc-700 h-2/5 mt-5">
            
              <h1 className="text-sm font-medium pl-4">
                REVENUE AND FINANCE AUTOMATION
              </h1>
              <div className="flex w-full">
                <div className="w-2/4 pl-[10vh] mt-4">
                  <h1 className="text-sm font-medium">Billing</h1>
                  <h1 className="text-sm font-light">
                    Subscription management
                  </h1>
                  <h1 className="text-sm font-medium mt-3">
                    Revenue Recognition
                  </h1>
                  <h1 className="text-sm font-light">Accounting automation</h1>
                  <h1 className="text-sm font-medium mt-3">Tax</h1>
                  <h1 className="text-sm font-light">
                    Sales tax & VAT automation
                  </h1>
                </div>
                <div className="w-2/4 pl-[10vh] mt-4">
                  <h1 className="text-sm font-medium">Invoicing</h1>
                  <h1 className="text-sm font-light">Online invoices</h1>
                  <h1 className="text-sm font-medium mt-3">Sigma</h1>
                  <h1 className="text-sm font-light">Custom reports</h1>
                  <h1 className="text-sm font-medium mt-3">Data Pipeline</h1>
                  <h1 className="text-sm font-light">Data warehouse sync</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 text-zinc-500 p-7 text-sm bg-[#EFF3F9] rounded-lg">
            <h1 className="text-black">MORE</h1>
            <h1 className="pt-2">Payment methods</h1>
            <h1 className="pt-2">Link</h1>
            <h1 className="pt-2">Financial Connections</h1>
            <h1 className="pt-2">Identity</h1>
            <h1 className="pt-2">Atlas</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
