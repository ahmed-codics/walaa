<motion.div
  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins px-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <motion.div
    className="bg-white p-5 sm:p-6 rounded-lg shadow-lg w-[95%] max-w-xs sm:max-w-sm relative"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {/* ✅ Close Button */}
    <button onClick={closeModal} className="absolute top-3 right-3 text-gray-600 hover:text-black">
      <X className="size-5 sm:size-6" />
    </button>

    {/* ✅ Form */}
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {modalType === 'signUp' && (
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base sm:text-lg text-black font-medium">Full Name</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 size-5 text-gray-400" />
            <input
              type="text"
              name="fullName"
              className="input input-bordered w-full pl-10 text-sm sm:text-base"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {/* ✅ Email Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base sm:text-lg text-black font-medium">Email</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 size-5 text-gray-400" />
          <input
            type="email"
            name="email"
            className="input input-bordered w-full pl-10 text-sm sm:text-base"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* ✅ Password Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base sm:text-lg text-black font-medium">Password</span>
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 size-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input input-bordered w-full pl-10 pr-10 text-sm sm:text-base"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="size-5 text-gray-400" /> : <Eye className="size-5 text-gray-400" />}
          </button>
        </div>
      </div>

      {/* ✅ Submit Button */}
      <button
        type="submit"
        className="btn w-full bg-blue-600 text-white font-medium rounded-md py-2 text-base sm:text-lg transition-all hover:bg-blue-700"
        disabled={modalType === "signUp" ? isSigningUp : isLoggingIn}
      >
        {modalType === "signUp"
          ? isSigningUp
            ? <Loader2 className="size-5 animate-spin" />
            : "Create Account"
          : isLoggingIn
          ? <Loader2 className="size-5 animate-spin" />
          : "Sign In"}
      </button>
    </form>

    {/* ✅ Toggle Between Sign In & Sign Up */}
    <div className="text-center mt-4">
      {modalType === "signUp" ? (
        <p className="text-gray-600 text-sm sm:text-base">
          Already have an account?{" "}
          <button onClick={() => switchModal("signIn")} className="text-blue-600 font-semibold hover:underline">
            Sign in
          </button>
        </p>
      ) : (
        <p className="text-gray-600 text-sm sm:text-base">
          Don't have an account?{" "}
          <button onClick={() => switchModal("signUp")} className="text-blue-600 font-semibold hover:underline">
            Create one!
          </button>
        </p>
      )}
    </div>
  </motion.div>
</motion.div>
