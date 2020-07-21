<body>
    <script language="Javascript">
        var tahun;
        tahun = prompt("Tahun","");

        if (tahun%4!=0)
            {
                document.write(tahun +" adalah bukan tahun kabisat"); 
            }
        else if((tahun%100==0)&&(tahun%400!=0))
            {
                document.write(tahun +" adalah bukan tahun kabisat"); 
            }
        else 
            {   
                document.write(tahun +" adalah tahun kabisat"); 
            }
            
    </script>
</body>