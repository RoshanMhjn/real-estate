import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Eye, EyeOff, Facebook, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
type RegisterFormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: "buyer" | "seller";
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      role: "buyer",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: RegisterFormData) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Registered:", data);
      setLoading(false);
    }, 1000);
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 max-w-md mx-auto my-10"
    >
      <div>
        <Label htmlFor="name" className="mb-4">
          Full Name
        </Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="mb-4">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone" className="mb-4">
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone", {
            required: "Phone number is required",
            minLength: { value: 7, message: "Too short" },
          })}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="password" className="mb-4">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <Label htmlFor="confirmPassword" className="mb-4">
          Confirm Password
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Role Selection */}
      <div>
        <Label className="block mb-4">I am a</Label>
        <RadioGroup defaultValue="buyer" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="buyer" id="buyer" {...register("role")} />
            <Label htmlFor="buyer">Buyer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="seller" id="seller" {...register("role")} />
            <Label htmlFor="seller">Seller</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Social Logins */}
      <div className="flex flex-col space-y-2">
        <Button type="button" variant="outline" className="w-full flex gap-2">
          <Facebook size={18} className="text-blue-600" />
          Continue with Facebook
        </Button>
        <Button type="button" variant="outline" className="w-full flex gap-2">
          <FcGoogle size={18} />
          Continue with Google
        </Button>
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Registering...
          </>
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
}
