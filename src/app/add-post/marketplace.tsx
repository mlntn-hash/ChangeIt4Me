export default function MarketplaceForm() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Make</label>
        <input type="text" placeholder="marketplace" className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block font-medium">Model</label>
        <input type="text" className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block font-medium">Year</label>
        <input type="number" className="border rounded w-full p-2" />
      </div>
    </div>
  );
}
