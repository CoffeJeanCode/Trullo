<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";

  export const url = null;
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="login">Login</Link>
  </nav>
  <div>
    <Route path="login" component="{Login}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>