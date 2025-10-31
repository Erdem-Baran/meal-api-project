export default function Footer() {
  return (
    <footer className="py-3 mt-auto bg-body-tertiary">
      <div className="container text-center">
        <p className="mb-0">
          <span>
            &copy; {new Date().getFullYear()} Meal App. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
