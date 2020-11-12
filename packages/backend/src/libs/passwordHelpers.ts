import bcrypt from 'bcrypt'

export const encryptPassword = async function (
  password: string
): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}
export const validatePassword = async function (
  password: string,
  userPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, userPassword)
}
