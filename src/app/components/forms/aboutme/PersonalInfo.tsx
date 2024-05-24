export default function PersonalInfo() {
  return (
    <div>
      <div>
        {/* HEAD */}

        <hr />
        <section className="mb-2">
          <div className="flex">
            <div className="text-xs font-semibold mr-1">Employee Code:</div>
            <div className="text-xs">1234567890</div>
          </div>
          <div className="flex">
            <div className="text-xs font-semibold mr-1">Employee Name:</div>
            <div className="text-xs uppercase">Kim Ariel N. Dequilla</div>
          </div>
        </section>

        <hr />
        {/* BENEFITS SECTION */}
        <section className="mb-2 mt-2">
          <div className="flex justify-between">
            <div className="mr-10">
              <div className="flex">
                <div className="text-xs font-semibold mr-1">TIN:</div>
                <div className="text-xs uppercase">312313-2313113-2323</div>
              </div>
              <div className="flex">
                <div className="text-xs font-semibold mr-1">SSS No:</div>
                <div className="text-xs uppercase">3213-68-865</div>
              </div>
              <div className="flex">
                <div className="text-xs font-semibold mr-1">PHIC No:</div>
                <div className="text-xs uppercase">6865-765-568</div>
              </div>
              <div className="flex">
                <div className="text-xs font-semibold mr-1">HDMF:</div>
                <div className="text-xs uppercase">3458-987-878</div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="text-xs font-semibold mr-1">Birth Date:</div>
                <div className="text-xs uppercase">11/17/1998</div>
              </div>
            </div>
            <div className="grow"></div>
          </div>
        </section>

        <label htmlFor="general">General</label>
        <hr />
        <section id="general" className="mb-2 mt-2">
          <div className="flex justify-between"></div>
        </section>
      </div>
    </div>
  );
}
