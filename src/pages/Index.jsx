import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Text, VStack } from "@chakra-ui/react";

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
  const [totalCost, setTotalCost] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (costs[craneType]) {
      const calculatedCost = calculateCost(craneType, parseFloat(distance));
      setTotalCost(calculatedCost.toFixed(2));
    } else {
      setTotalCost(null);
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
          <Button type="submit" colorScheme="blue">
            Calculate Cost
          </Button>
        </VStack>
      </form>
      {totalCost !== null && (
        <Box mt={8} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            Total Cost: ${totalCost}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Index;
