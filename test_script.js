var menuPrices = 
            {
                "cafe latte": 9.50,
                "cafe Mocha": 9.50,
                "americano": 6.90,
                "caramel macchiato": 11.70,
                "vietnamese spanish latte": 10.90
            };

            function calculateOrder() {
                // Get selected values from the form
                var coffeeType = document.getElementById('coffee-type').value;
                var coffeeSize = document.getElementById('coffee-size').value;
                var additionalOptions = document.getElementById('additional-options').value;
            
                // Use menu prices to calculate total cost
                var baseCost = menuPrices[coffeeType]; // Base cost for a coffee
                var additionalOptionsCost = 1.50; // Additional cost for each extra option
            
                var totalCost = baseCost + additionalOptions.split(',').length * additionalOptionsCost;
            
                // Display order summary
                document.getElementById('summary-coffee-type').innerText = coffeeType;
                document.getElementById('summary-coffee-size').innerText = coffeeSize;
                document.getElementById('summary-additional-options').innerText = additionalOptions || 'None';
                document.getElementById('summary-total-cost').innerText = totalCost.toFixed(2);
            }