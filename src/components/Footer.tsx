export default function Footer() {
  return (
    <div className="footerholder py-5">
      <div className="container">
        <div className="divider w-100 bg-primary" />
        <div className="row justify-content-between py-2">
          <div className="col-auto">
            <div className="text-primary">&copy;</div>
            <div>{new Date().getFullYear()}</div>
          </div>
          <div className="col-auto">
            <div className="text-md-end">
              <a className="footer-link d-block" href="mailto:tom@bubblestorm.co.uk">
                tom@bubblestorm.co.uk
              </a>
              <a className="footer-link d-block" href="https://www.linkedin.com/in/tomguyuk/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
