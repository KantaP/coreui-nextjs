// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
            {/* <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css" />
            <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
            <script src="https://unpkg.com/@coreui/coreui/dist/js/coreui.min.js"></script> */}
        </Head>
        <body className="app sidebar-show aside-menu-show">
            <header className="app-header navbar">
            
            </header>
            <div className="app-body">
            <div className="sidebar">
                
            </div>
            <main className="main">
                <Main />
            </main>
            <aside className="aside-menu">
                
            </aside>
            </div>
            <footer className="app-footer">
            
            </footer>
            <NextScript />
        </body>
      </html>
    )
  }
}