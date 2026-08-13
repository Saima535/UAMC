export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold">UAMC</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            A modern healthcare experience for patients, families, and clinicians.
          </p>
        </div>
        <div className="text-sm text-muted">
          <p className="font-semibold text-ink">Visit</p>
          <p className="mt-3">House 12, Road 5, Dhanmondi, Dhaka</p>
          <p>+880 1234 567 890</p>
          <p>info@uamc.com</p>
        </div>
        <div className="text-sm text-muted">
          <p className="font-semibold text-ink">Hours</p>
          <p className="mt-3">Emergency: 24/7</p>
          <p>OPD: Sat - Thu, 8:00 AM - 8:00 PM</p>
          <p>Lab: Daily, 7:00 AM - 10:00 PM</p>
        </div>
      </div>
    </footer>
  );
}
