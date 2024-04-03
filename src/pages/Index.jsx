import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Text, VStack, Checkbox } from "@chakra-ui/react";

const costs = {
  A: { costPerKm: 18.82, baseCost: 528.69 },
  B: { costPerKm: 20.62, baseCost: 607.43 },
  C: { costPerKm: 23.47, baseCost: 721.79 },
  D: { costPerKm: 32.35, baseCost: 885.84 },
};

const calculateCost = (type, distance) => {
  const { costPerKm, baseCost } = costs[type];
  return baseCost + costPerKm * distance;
};

const Index = () => {
  const [craneType, setCraneType] = useState("");
  const [distance, setDistance] = useState("");
  const [tollCost, setTollCost] = useState("");
  const [includeToll, setIncludeToll] = useState(false);
  const [totalCost, setTotalCost] = useState(null);
  const [totalCostWithToll, setTotalCostWithToll] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (costs[craneType]) {
      const calculatedCost = calculateCost(craneType, parseFloat(distance));
      setTotalCost(calculatedCost.toFixed(2));

      if (includeToll && tollCost) {
        const tollCostValue = parseFloat(tollCost);
        const totalCostWithToll = calculatedCost + tollCostValue * 2;
        setTotalCostWithToll(totalCostWithToll.toFixed(2));
      } else {
        setTotalCostWithToll(null);
      }
    } else {
      setTotalCost(null);
      setTotalCostWithToll(null);
      alert('Invalid crane type. Must be "A", "B", "C" or "D".');
    }
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Crane Type</FormLabel>
            <Select placeholder="Select crane type" value={craneType} onChange={(e) => setCraneType(e.target.value)} required>
              <option value="A">Type A</option>
              <option value="B">Type B</option>
              <option value="C">Type C</option>
              <option value="D">Type D</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Distance (km)</FormLabel>
            <Input type="number" step="0.01" value={distance} onChange={(e) => setDistance(e.target.value)} required />
          </FormControl>
          <FormControl>
            <Checkbox isChecked={includeToll} onChange={(e) => setIncludeToll(e.target.checked)}>
              Include toll cost
            </Checkbox>
          </FormControl>
          {includeToll && (
            <FormControl>
              <FormLabel>Toll Cost</FormLabel>
              <Input type="number" step="0.01" value={tollCost} onChange={(e) => setTollCost(e.target.value)} />
            </FormControl>
          )}
          <Button type="submit" colorScheme="blue">
            Calculate Cost
          </Button>
        </VStack>
      </form>
      {totalCost !== null && (
        <Box mt={8} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            Total Cost (without toll): ${totalCost}
          </Text>
          {totalCostWithToll !== null && (
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              Total Cost (with toll): ${totalCostWithToll}
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Index;
