import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  /* line 1, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_travel_variation.scss */
  .travel_variation_area {
    padding-top: 150px;
    padding-bottom: 114px;
  }
  img {
    width: 150px;
    height: 100px;
    border-radius: 50%;
  }
  @media (max-width: 767px) {
    /* line 1, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_travel_variation.scss */
    .travel_variation_area {
      padding: 60px 0;
    }
  }

  /* line 7, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_travel_variation.scss */
  .travel_variation_area .single_travel {
    margin-bottom: 30px;
  }

  /* line 12, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_travel_variation.scss */
  .travel_variation_area .single_travel h3 {
    font-size: 22px;
    font-weight: 400;
    color: #040e27;
    margin-bottom: 10px;
    margin-top: 41px;
  }

  @media (max-width: 767px) {
    /* line 12, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_travel_variation.scss */
    .travel_variation_area .single_travel h3 {
      margin-top: 20px;
    }
  }

  /* line 23, ../../Arafath/CL/December/231. Travel-02/HTML/scss/_travel_variation.scss */
  .travel_variation_area .single_travel p {
    font-size: 16px;
    font-weight: 400;
    color: #6e6e6e;
  }
`;
const SecondlastF = () => {
  return (
    <Wrapper>
      <div class="travel_variation_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single_travel text-center">
                <div class="icon">
                  <img
                    src="https://www.shutterstock.com/image-photo/young-man-resting-deck-chair-260nw-2324494723.jpg"
                    alt=""
                  />
                </div>
                <h3>Comfortable Journey</h3>
                <p>
                  A wonderful serenity has taken to the possession of my entire
                  soul.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_travel text-center">
                <div class="icon">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAowMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD0QAAIBAwIFAQYFAwIDCQAAAAECAwAEERIhBRMiMUFRBhQjMmFxM0JSkaEVgbFik1PB0QcWJDRDVGNykv/EABoBAQACAwEAAAAAAAAAAAAAAAABAwIEBQb/xAA0EQACAgEDAQUFBwUBAQAAAAAAAQIDEQQSITEFEyJBURRSYXGxMoGRocHR8BUjM0Lh8ST/2gAMAwEAAhEDEQA/APtbTI6lR3O29AAiGI6mxgDxQFyfGwE8etAWjCEYfud9qABozKxZcYPagGCVQNHkbUACxmNtbdh6UBcjCUaU+9ASM8nOvz6UBTqZm1p2+tAEsqxqFbORtQACJgQ+2M5oA2kWUaF7n1oAYwYTl9s+lAW4Mxynj1oC0cRLobOaAExMxLjsd6AJpVcFBnJ+lACimFtT9sY2oC3+OBo8d80APIf6UAXKKdRbIG+MUBDJzjoAx9aArHu+56s7UBeOf1A4xt2oCc3ldBGceaAnK/PnHmoYEzXqaSoBJI8Vz7+0qauI+J/z+cF0aZS6mX3mQHKELXLt7Uvn9nj5f9L40RXUW0sjfM7H+9aktRdLrJ/iWKEV5Faj6n96w7yfq/xJ2r0LDuPzGrI6m6PSb/FkOEX5DlvZgMEhh9RW3V2pfD7XP8+BXKiL6DYbhMgk4b0NdOjtKm3h8P4/uUTplHlGnPPGnGnG+a6JSQHkdJ3zvmgIY+adYbFATm6fh4zjbOaAoRcvrJ+Xc/WgLL87o+U+tAT8Dvvn60BPeR+n+aAESs5CkDB2NAEyCHqXOfrQEXMxw+2O2KAjsYTpXfzvQAvyxHzZSRnwKquvhTHdNmUYuTwjDPcyS9Pyr6CvN6rXWXvHSPp+5uV1KAmtItJQFZHrUgmRQEyPWgJmgLqAOt7h4SfzA+DW9pdfZQ8PmP8AOhVZUpG6MrcrqJ7HHTXo6roXRUoM05RcXhls5ibQoBH1q0xCEasA5Jyd8UAIlLkIQMHY0ATKIlLpufrQFIecTr2x2xQBchP1H96Ato0RSyrggZFAKiYyMFc5HegCm+EBy+nNASMcxcvuRsM1AMN5HKrZkHT+XHYV5ztCGo377Onl6I3aXHGEZiQASTgDzXOLm8GccQs8f+bt/wDcFXey3+4/wZV31fvL8TBxy7tpuGvHHcROzPGNKyDJ6x9atqothPdKDx8jZ0lkJXJJrz+h4qBL2YwaI5nJijlZVkGZFdtII9MkgefWup3Plg70pVxzlpctfLCyxwseI/EXpzpLq/vUekKDht8747H0/vU9w/gVu+lYf6P7vLz8gHivImDSg6I4hJKguFLadt9slc6l8VDpwvIyU4NYXXOFw16/sd72Nu444bg3FwiltBBkcDO7D/pWhqaZza2Rz8vuOd2pKEJRTeOv6Ho/f7P/AN3b/wC6K1fZr/cf4M5ffV+8h0Uscya4pFkXtqU5FVzhKDxJYLIyUllDoZWhbKHGe49au02pnp57o9PNGM4KaOnAEmiDkaifNepqthbBTg+GaEouLwwGdlcqD0g4xVhA141VSwUZXsaAXGxlbRIcjHagCl+EBy+nNAL5z/qoCIG1jIIGaAdNgxkL3+lADACGbV/NAPGKAGRFkUq65BquyuNkdsllEqTTyjiXkIPNgDYDAqD6ZFeWugqL3GPkzei3KGTyif8AZyvLU/1e67foWvXQ11s4qW1c/FnEfZ8E8bn+RUvsHJYoLq3vbm6eNlYQ6V6hkZqvU32W1OG1cm92dp6tPqY2OT4z1+QNtbe0ltHDGtoxjhhjiVCWK5Rg2rGPPb+9aebPdPRTnopNvdy235Z5WMfcIfhnFli5UXCuTDyJogjOzYMhGWyV3+UYGKjFnumS1OmzulZl5T8vLyHy2/FJtSz8LkZXtxAye8OBgaN1Gjp+Spe9/wCrMI26aP2bUsPPRfH4/Ez2XsbPfqTdyz2ZjAVQig69yfPpkfzV+kssp3Yj19Tl9sqrVyg4z6Z6fcaP+4EY3/q13/8Aha3Pa7fdX5nE9gh7z/I7/BeGLwewWzWZ5gjMdbgA7nO+K8l2hqHqNQ5tY8vwOvpaVTUoJnSSKSRdSKSKpr09tizGOUXOcV1Dgdo5NLbZ9fBrd7O1Dpt7ufR/UpuhujuR1E06BkjOK9EaghM61JBxmgGzYMfTuc+KAGDbOvb70A7KeooAGkVlIVsk+KAXBGyvuuAKAZOjMmUOHHaq7d+x7OvkSsZ5OYbq5DFS+CO/SK83LX6qDxKXT4L9jdVVbIbq4/4n8Co/qGq978l+w7mHoZZ4kuEKSgspOSMkZ/atWMmnnJdFuDzEDinDra4PD45YgyRxuACTt8tes0sI2VR3rPCOfPV30TbrljPXoBDZ28PA+JwwJpiy/TqP6Fq2VcVJRSMfa7p/3ZS8S6PgljwuxsuIwNbQiOTLgkE/pqZ01xWUh7dqblssnlfcZeJ8KsZG4jcSwAy5chiTnOkVlCiuSTaD7S1dXhhNpL5ehq4jYW13c28U8YdER8Ak4GCuKwrrhPO5D2u+j/HLGeolLO2g4ZxGC3i0RHUNIJ/Qv/OjripKK6D2y+z+7KWZLoy7bhllZX0D20Ajlw2WUn07d6mdNcVlIe3am3wWTyvuN9lYRCeUxApklmGonvXm41PU3yjN8LP1N6d0tiydcKAoUbAdq7MYqKSXkafV5FTQLICdPX4IrX1OnjbFvHi8jOE3HjyLjhdlDSYDHuK36XN1reuSqWMvA+X8Mjye1WmIqMNG2X2HrQFy/Fxo6sUAvkv+igGJAQwJPagNFASgE3MQkiYaQTjatbVURtrcccmcJYZxyuk6SMH0rybTi8NcnQTzyUaAbdWi3Ihdp5IdCkDQ6jOceoPoK9ZpZ7KY/JHNsr3yZIrBEsri358rpOSXkLqSNgDjAx2FXOxt5MVVtW0G2sFjuUnF3PKy56XdCN9vC5qXbu4IjSoeLkTe8PSQyl7ydOaSXUOmNx2+X0ornHgOhS5LubXmmNmuZInQFcqw3zjvle+wqIzcSXXvAjsx7tPF7zK4l+ZywyNsbELjxR2NtMhV7U4khtAs6S++yysuQFZlxvscgLUu1yWAqdnJpSRo5GdMb15aV06b5Sj6v6nR2qUUmO99kP5Vq/8Aqdnuow7hep0kHSCRviu/XFbUzUYdWkEoBcq6hpHc/tQC1+BnVvntigC94X0NAUk5ZgCvf60A5mCjLbCgFG6hBwXFa9mqprltnLDMlCTWUijdQZ/EFVvX6b30T3U/Q5lw4kmZ17GvO6q2N1znHob1cXGOGZriCK4jMc6B0P5T2qmMnF5RZGUovMScR4fa3HuEUsEbxxxuFVhsB0167SRjOpOazwjm26m+qbdcms9Rcdpbx8F4pFDCqRFnyibD5Fq2VcYySSMFqbprvJSe5dGXacPsrXiUBt7aGOTLgsgxtpO1TOuEVlILWai17bJtoy8S4dYueJTTW0LvlzqZd86Rvmso1VySyg9dqq8qNjSXQ039lbXVzbx3EKOiRyYDDOACtV1whLO5EvUXVf45NZ6ihbW8fD+IwwwokO/QBgfhjxR1xUkkuAtTdP8AuOTyvPzLgsLK0voGt7aKOQB+pFwRtWU6oRWUiPbNRb4bJto0R2kFvNI8MSozsS2B3JNeR1M5Sskm/N/U6anOUEpPJssMG4GoDttV/Zqg9R4vTgpuzt4OsK9MaRM0BdSAJW0ANQCh/wCI2O2mgL92H6v4oCzEqAsM5G4oAEcytpbGMeKAwXqhbggegrzHaa/+l/cbtH2BNaJcSoBRIAySAPU1KGMh3dvb3CW8k9w0WlDpK3HLznGfv2Fes01jhTH5I51lLsm+GXDZWosbiFJ3eGUnmSe8liNhnq8bAVc7G3kx7nb4cPkG0tLVblZIruSWRQcK12X799qO1yWAtM6/FhiL2ysmeUyXcitIx1qLsgbjtjxUq6S4yPZXPnD5Lu7eFzG01w8ZRSoInKZBxn79hURsceg7nvOibwVFa2/uk8a3DtHLu7+8EnsAerxsKOxt7h3G3wYfINvb2y3CyRXUkki5wpuS332pK1y4yPZnX4trQ/UrE6SDv4Oa8lqE1bL5v6nSimoouqSQ+bJ/xG/ere/t95/izHZH0G2srmbd2IxvvW/2bZZPUJSk3w/MquilDhHQddKlgW2HrXojTAVjK2lu30oC3+ABo7nvmgA58nqP2oCI7MwBJwTvQDZQEXUowfpQHNvMmQMfIxXnu1oYuUvVG5p34cCa5ReSgFzQxTponijlTOdMiBh+xrKLaeUyVKUXmLwyuI2NpM1ikttA6LG4VWjBAGF7ZG1ev0iUqo7ueEc26+6Em4Taz1w2LS1tk4LxOOK3hSJi/wANYwFPQvirJRippYMFqLpLe5ttdHl5QVrY2VvxKE29pbxvl+qOJQex8gVnZCKj4URHU32PbOba+Lb/AFMvErCxb+pTS2du8jF8M0Sk50jfOKmEItLKREtXqIZjGySS8ss039nbXF1brcW8MirHJgPGGA3Xtmq64RfDWTKd9teHCbWfRtCvd7ZLDiMUVvCkJzlFQBfw18VMoxU0kgtRdJOxyba6PLz+JcVlZW17btBaW8UgD9aRKD2x4qZwillJER1V1j2zsbXo22aEtoIZZHigijdidTIgBb74ryGpnKVssvzf1OopScUm8jK1ySUBq4emp3J7AV1uyIZtlL0Rr6h+HBpVmZwGJw2xFegNQbKAial2I9KAGH4mdfV6ZoBvLj9BQFOylSAyk48UAmEFXy4I+9AL4goaMMu+k74rl9q1bqlNeRfRLEsepz686bhKAF3SNS0jqijuWOBUpNvhEpN8JEvxw2WO2kv7mKIaDymN40QYHGexGfFes09jrpjzjhGjLSzum1GDePRF20PDf6dcrBPG9pITznF47DsM9ecjYDzVvet+LJW9NKD7txab8uci7GPhDXaPZ3cU065KgX7yeN+ksc1Hf7uMky0c6vFKDXzz+oi+i4IJZhc3sSTO55qHiDrgnv06hj7VPfuPGQtBZNb1CTT+D/8ABl/HYARNe3CwgAiMm6aPPbO4Iz2FO9cPMR007vsxbx6Z/QqGHh7WU4hnSS2f8WT3pmA236s5Gw9ajvXJ7skPTSg+7cWm/LnP7gWS8La6RrS8SadQSqrevIcY36dRzU9858ZMpaOdXjlBr5p/qaVljkZuXIjkE50sDivKaiLVssrzf1N5RlGK3IOqCSUBrtY2CBgp6jnNek7Lr2U7n/saV8syx6G6RgYyFIyRXSKRUIKvlth9aAKbrxo6vtQCtD/pb9jQBrEyMGK4A770AcjCRNKHLGgAVQgYSjAYYrGcVOLi+jJTw8nMddDlT48+teQuqdM3B+R0IS3LJVVGQEkaSrpkRWHfDDNSm10JTa6BX0ETvYq8aELG+xUbfLXsNGk6o59Ecq+coy4eBQjj/pHE1WNFUs+wXb5Fq6aSmkYRsk4Nt8jIYYY+IwCOJAcv1BQPy1lZFKOcGNds5PDlky8Qt4dHEnaKNmJfug/SKmuCaXBE7pxk0pfn8B93BHJeQCSNCqxybFRtulV1RTysFltk44wxLRp7nxBUjVVOekDb8NamUVvREbJuLeeRghiiu4OXEisNeWCgb4qbIpR6EQssbw2/xG8qJJXdI0VidyFwTXjtRJu2WfV/U68W3FJhVQSFFGZZAijOe/2q6il3WKC8zGctscnWV0VAhO4GO1eujFRSjHojnt5FrGyMGIwAd6yIDkYSrpQ5bvQFRfByX2zQB85P1fxQAmYP0YxnbvQAhDD1Eg+MCgLPx9htj1oDNdQYUAHqAzXN7Q0jujuh9pF1Nm14ZirzZugSyxwprlkREHdmOBWUU2+CVFyeEiXz8MeK2l4hPAgZPgs0rLkbZxg7+K9Vp5uFUeccI0npbLZyUYt4LthwpuG3Jt5YWsyTzmErEZwM5OfTFXd6292TB6WcH3bjy/IXw7+jPdobG4hkuACVCzsx+uxNO+cuMkz0VlS3Sg0Iv24CJplubi3ExY81TO3fzkZp3zXGTKOhusW5QbTGX/8ATV5JvZo1AXTGTIRkbdt9+wqO8285MIaWd3EY5wDAOGNYTmCSM2pyZW5hI7b5OfTFO8z4siWllCXduPL8gLJuEPdIbO4ie4GdIWUse2+xNO93cZJnobKlvlBpGpLiGZ3WKRGKkhgrZwa8rqItWyz6v6m8oyjFbkMqkG+1UW+dY6z/ABXpOz9J3EN0vtM0rrNzwh3KLHWD33xXRKSzKH6MHJoCgnJy53+goCyefsAVx60BXu5/V/FAEYQg1gnp3oAQ5mOggDzkUBZHI3XfO29AQLz9ycY22oDHdW+H6NyO49a5Gu7P35sr6+a9TYquxxIyMARhgDg+RXB5TwbeQ72NWks9S5Cxv4/+tew0X+KPyRydS2pCdIPCuJgLp3fbH+haumkpoxhJuDyNjVF4hCFTG75OP9JrK1eEwqb3dTLfoqx8SbRluvfH+gVlWlhZMbJSTeH/ADA+6jD3sOpchUkOMfVKrp88ltzfGBLLm04gAgGSdgP/AI1pJf3EISbgxhRUu7cKgHzksB9KztS2mNbe7AzQOYdKjJPgV4y7MrZJer+p2U/CsmuGAwlXkUFj2B8V2dD2f3f9yzr6en/foatt2eImsIJeskg9tq6xrlc0odAGw2zQF8pYxryenegIHM3Q231FAQjkfLvq9aAr3hvQUBSyuzAMdiaAORBGNSDDetADFmYnmb4G1ASQmJsJtkb0Aaosi6mGSe9AYTyrpm0Op0uULL4I7g1o6nR1anlcP1X6mdVzXQz8Rhsi0a8QhSZ0UlSYS+Btn7eK2qK5wgoxfTgqtlDPiQiNuFpbyW0VsiwzDVJGLVsP27j9qt2WZyytTqxhGhLHhlmBerBawaF1Cbl6dII9SdqrlZL/AGZdCpOS2R5OBecX9lpJZDJFFKzNmSQWjEEn6+ar9pxxk3/6LfJbnBfkdOJeF8UiSRBb3CRjSvRnT9MZ27Cso2P/AFZqX6aVcttscEEfDoo5LdbdRFI5V0W3JViPXwe38VbtsfiNbdXFOJVtBwxLhGtrVY5QxVXEBUg4Od/sDSXeJZYh3WfCjsFI7WHnkgYGpmbwO9alWkqqk7PP1NidrceeiHwlbhA5IYHBVh6GtpPJWnnkkjtG+lSAKkkNY1ZQ5HURnNALSVmcIxGM4NAHIoiXVGMNQFRfFzr3xQB8mP8AT/NAW4UIxUDOPFAJhJLgPkjHmgCn6QNG2/igLhwVOvfHbNAZuITm1gnlX/00LD07VjOW2LZhZLbFs8z7D3eb+/tGLMrKJgW/VsG/yK5+im98o/ec/Q2eOUfvO1xNZNYdIZH+Cy5UZwciunVJLOTduTfQy/FRkcW04Ai0DoP0q3fH1KtsvQ8p7X3V7cX/ALpyZRBaBI40EZIaQqN+2D6D7VzLt0pNJHruy+4pp3yktz+nocCKKQR8swy65flXlnLfbaqdk/Q6XtdC/wB0aeFXN5w24S4hin1x41qIz1xk4wdvXt9RWUVOLzgo1E9NfW4OS/6fQJC/NUC3lOmZ3OE7g6sf5FdWM47ep4icJbnhFwFy8YMUgAmdmYrgdmx/monOO14Yri9yeC/aa5MPCSh1fGYR9/y4yf8AH81paqe2rHqRrJ7a/mB7H3TT8DijycwMY858Dt/BFRopbqUvTgjRS3Ur4cHooQDGCwGfrW2bYpy2sgE4zQDnChDgDPigFQkl8PuMeaAOfpC6NvtQCdT+poAkRlcMykAHvQDZWWRCqEEmgBh+GSX6c+tAVKDIQU6hjxQCb6D3jh01sWCu6EDPg+Kwshvg0YWR3QcTzXsnwe7g4jc3l1FoGGiB1A6zqGTt6acVo6SicZuUkaWk0067HOawdb2hn18MuUt2Kv8AmyQMjO4z9qtvknFqPU3bqrJ1tQWWeavI7pvZeygaVdSsdxIowM9G+cbffb+1aklN0xh5r+I05aTVOiMEuV8vu/A63ErhZUhhaTVOtxaCQDw2qurp5dM+jNi2LUMPqsF3cuOK2aBWIVWyfXOB/HmtxdGa7xlC2uIU41cGVyq8i1A+vxJKptaSWfj9C2pZlL7jPapcr7R3chkAUxsPmG+fk2znauPFvvnLyEdNqFe5tcP8/T8BnsujxC9Ny5MbSdIVlbqA6jsfO1ZaaThu3k6XT317u8WMnU9prWS+4Wnu3U0PWRtkrgg1saiDsr8PkNVVKyOIdQfY6wk4Zws+9KIpJ35mjVnSMADemkpddeJGOjplVXiSwzryKXcsoyPWto2xyuoQKWAbGMUAlEZXDFSAD3oBspEiYQ5OaAGH4ZbXtntmgG82P9QoADMrgqucntQAIhiOpvlFAW554ATwcnNARG5C6X/tigPMcct/a244jK/B5rJbJgAglOGG2/5fvWS2+Zi1JnKtuH+3FsWEE/DVLfNmQn/K1k5J9TBQa6EueEe288Mkc78MeORSrjWdwe/5ap7ql84LYzsi8pmZ/Z72uuLSKzb+ltbwlSiGQ7ae2+nNO6p90zV9yk5KXL+Q2XgntmZmmkbhnMZkYnmHuvyn5asjsjhJFEouXUP+ke28jpLzOGlkBCnWds9/y/Ss+8Rh3QmbgfthJKzynhZkIQE8w/lJK+PBJ/esZSi+pKr2jI+Be2kV3NeRnhgnmUCR9Z3A7bacVV3VXobDttcVFvhAWXBPbG0V47VuGIJJGkYBycse5+WndU+gnddNpyZpm4f7dPEY5ZuG6G8ayM/stWpxj0KXGUuodnY+3KNEnP4dyFcahrydOd8dNG4shQa4Pbq6xDSwOfpWBaAYmY6xp0nf60AbSq6lFzk7CgBRTCdT/L9KAt/jY0ePWgB5D/6aABPnB9KA0Tbxb0AFsNiaAq43YUAyLaIUBnYfEH3oDRMcR/egFQbOMUBdxuQDQBWx2I8UAmT8b7mgNX5MfSgM8AHM+woBs4BTJ8UBVsBoP1oBc3z5oBynEQ+1AZ1OJBjxQD7j8PFADbjH96AdQH//2Q=="
                    alt=""
                  />
                </div>
                <h3>Luxuries Hotel</h3>
                <p>
                  A wonderful serenity has taken to the possession of my entire
                  soul.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_travel text-center">
                <div class="icon">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <h3>Travel Guide</h3>
                <p>
                  A wonderful serenity has taken to the possession of my entire
                  soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SecondlastF;
