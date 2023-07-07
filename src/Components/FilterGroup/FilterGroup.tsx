const FilterGroup = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1>Invoices</h1>
        <p>7 invoices</p>
      </div>
      <div>
        <fieldset>
          <legend className="sr-only">Notifications</legend>
          <div className="space-y-5">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  New comments
                </label>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="candidates"
                  aria-describedby="candidates-description"
                  name="candidates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor="candidates"
                  className="font-medium text-gray-900"
                >
                  New candidates
                </label>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  aria-describedby="offers-description"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="offers" className="font-medium text-gray-900">
                  Offers
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </header>
  );
};

export default FilterGroup;
