import { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const calculateEMI = (principal: number, rate: number, years: number) => {
  const monthlyRate = rate / 12 / 100;
  const months = years * 12;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  return {
    emi: emi || 0,
    totalPayment: totalPayment || 0,
    totalInterest: totalInterest || 0,
  };
};

export const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");

  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const handleCalculate = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const tenure = parseFloat(loanTenure);

    if (!principal || !rate || !tenure) return;

    const calc = calculateEMI(principal, rate, tenure);
    setResult(calc);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center"> EMI Calculator</h1>

      <Card>
        <CardContent className="grid gap-6 p-6">
          <div>
            <Label htmlFor="loan" className="mb-4">
              Loan Amount (Rs)
            </Label>
            <Input
              id="loan"
              type="number"
              placeholder="e.g. 5000000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="rate" className="mb-4">
              Interest Rate (in %)
            </Label>
            <Input
              id="rate"
              type="number"
              placeholder="e.g. 9.5"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="tenure" className="mb-4">
              Tenure (in years)
            </Label>
            <Input
              id="tenure"
              type="number"
              placeholder="e.g. 20"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
            />
          </div>

          <Button onClick={handleCalculate}>Calculate EMI</Button>
        </CardContent>
      </Card>

      {result && (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">📊 EMI Details</h2>
          <p>
            Monthly EMI: <strong>Rs {result.emi.toFixed(2)}</strong>
          </p>
          <p>
            Total Interest Payable:{" "}
            <strong>Rs {result.totalInterest.toFixed(2)}</strong>
          </p>
          <p>
            Total Payment (Principal + Interest):{" "}
            <strong>Rs {result.totalPayment.toFixed(2)}</strong>
          </p>
        </div>
      )}
    </div>
  );
};
