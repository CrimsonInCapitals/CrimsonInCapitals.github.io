import React from "react";

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = async () => {
    try {
      // Fetch the file from the given URL
      const response = await fetch(fileUrl, { method: "GET" });

      if (!response.ok) {
        throw new Error(`Failed to download file: ${response.statusText}`);
      }

      // Convert the response to a Blob
      const blob = await response.blob();

      // Create a temporary object URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary <a> element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName || "download";

      // Append to the DOM, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Release the object URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download file. Please try again.");
    }
  };

  return (
    <button onClick={handleDownload} style={{cursor:'pointer',textDecoration:'underline',color:'var(--Crimson)',fontStyle:'italic',fontFamily:'Baskervville',fontWeight:'600'}}>
      Download
      
    </button>
  );
};

export default DownloadButton;