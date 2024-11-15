import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const Pdfeditor = () => {
    return (
      <>
      
      <EmbedPDF
          mode="inline"
                style={{ width: '100%', height: 800 }}
                documentURL="https://cdn.simplepdf.com/simple-pdf/assets/sample.pdf"
        >
          <a href="" className="sidebar_poweredBy__Ts49p hidden"></a>
        </EmbedPDF>
        {/*<EmbedPDF
          mode="inline"
          style={{ width: 900, height: 800 }}
          documentURL="https://cdn.simplepdf.com/simple-pdf/assets/sample.pdf"
        /> 
        */}
  
        
        
  
      {/* <EmbedPDF companyIdentifier="yourcompany">
        <a href="https://cdn.simplepdf.com/simple-pdf/assets/schrute-farms-form-edit.pdf">
          Opens sample.pdf
        </a>
        </EmbedPDF>;
        <EmbedPDF>
        <button>Opens the simplePDF editor</button>
      </EmbedPDF> */}
      </>
  )
}

export default Pdfeditor