<body>
    <script language="Javascript">
        var nilai = new Array(2,15,22,36,49,54,60,78,87,91);
        var hasilMax = Math.max.apply(null,nilai);
        var hasilMin = Math.min.apply(null,nilai);
        var ratarata = Math.max.apply(null,nilai)/10;

        document.write("Nilai : "+ nilai+ "<br>");
        document.write("Maksimal: "+ hasilMax+ "<hr>");
        document.write("Minimal: "+ hasilMin+ "<hr>");    
        document.write("Rata-rata: "+ ratarata+ "<hr>");
    </script>
</body>