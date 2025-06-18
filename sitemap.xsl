<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>TijaraHub Services Sitemap</title>
        <meta charset="UTF-8"/>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; background-color: #f8f9fa; color: #212529; }
          h1 { font-size: 28px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #dee2e6; padding: 8px; text-align: left; }
          th { background-color: #e9ecef; }
          tr:nth-child(even) { background-color: #f1f3f5; }
          a { color: #007bff; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>Sitemap for TijaraHub Services</h1>
        <table>
          <thead>
            <tr>
              <th>Page URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="urlset/url">
              <tr>
                <td><a href="{loc}"><xsl:value-of select="loc"/></a></td>
                <td><xsl:value-of select="lastmod"/></td>
                <td><xsl:value-of select="changefreq"/></td>
                <td><xsl:value-of select="priority"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
