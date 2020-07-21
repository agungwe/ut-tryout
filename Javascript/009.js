<script>
        var json_data = '["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"]';
        obj = JSON.parse(json_data, reviver);
            
        const removeDupliactes = (values) => {
          let concatArray = values.map(eachValue => {
            return Object.values(eachValue).join('')
          })
          let filterValues = values.filter((value, index) => {
            return concatArray.indexOf(concatArray[index]) === index
        
          })
          return filterValues
        }
        removeDupliactes(json_data)
</script>