const fadeElements = document.querySelectorAll(".fade-up");
const serviceCards = document.querySelectorAll(".service-card");
const servicesButton = document.querySelector(".services__button");
const trustCards = document.querySelectorAll(".trust-card");
const profileCards = document.querySelectorAll(".profile-card");
const concernsPanel = document.querySelector(".concerns-section__panel");
const concernsButton = document.querySelector(".concerns-section__button");
const giftBannerText = document.querySelector(".gift-card-banner__text");
const giftBannerMedia = document.querySelector(".gift-card-banner__media");
const processSteps = document.querySelectorAll(".process-step");
const ctaTitle = document.querySelector(".expert-cta__title");
const ctaText = document.querySelector(".expert-cta__text");
const ctaActions = document.querySelector(".expert-cta__actions");
const footerRevealItems = document.querySelectorAll(
  ".site-footer__brand, .site-footer__column, .site-footer__bottom"
);

window.addEventListener("load", () => {
  fadeElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("show");
    }, index * 300);
  });
});

const awardCards = document.querySelectorAll(".award-card");

const awardsObserver = new IntersectionObserver (
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }
);

awardCards.forEach((card) => {
  awardsObserver.observe(card);
});

const revealObserver = new IntersectionObserver(
  (entries, observerInstance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const target = entry.target;

      if (target.classList.contains("service-card")) {
        const cardsArray = Array.from(serviceCards);
        const index = cardsArray.indexOf(target);

        setTimeout(() => {
          target.classList.add("is-visible");
        }, index * 150);
      } else {
        target.classList.add("is-visible");
      }

      observerInstance.unobserve(target);
    });
  },
  {
    threshold: 0.2
  }
);

serviceCards.forEach((card) => {
  revealObserver.observe(card);
});

if (servicesButton) {
  servicesButton.classList.add("services__button--hidden");
  revealObserver.observe(servicesButton);
}

const trustObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const targetCard = entry.target;
      const cardsArray = Array.from(trustCards);
      const cardIndex = cardsArray.indexOf(targetCard);

      setTimeout(() => {
        targetCard.classList.add("is-visible");
      }, cardIndex * 120);

      observer.unobserve(targetCard);
    });
  },
  {
    threshold: 0.2
  }
);

trustCards.forEach((card) => {
  trustObserver.observe(card);
});

const profileObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const currentCard = entry.target;
      const cardsArray = Array.from(profileCards);
      const cardIndex = cardsArray.indexOf(currentCard);

      setTimeout(() => {
        currentCard.classList.add("is-visible");
      }, cardIndex * 150);

      observer.unobserve(currentCard);
    });
  },
  {
    threshold: 0.2
  }
);

profileCards.forEach((card) => {
  profileObserver.observe(card);
});

const concernsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      if (entry.target.classList.contains("concerns-section__panel")) {
        entry.target.classList.add("is-visible");

        if (concernsButton) {
          setTimeout(() => {
            concernsButton.classList.add("is-visible");
          }, 220);
        }
      }

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25
  }
);

if (concernsPanel) {
  concernsObserver.observe(concernsPanel);
}

const giftBannerObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      if (entry.target.classList.contains("gift-card-banner__text")) {
        entry.target.classList.add("is-visible");

        if (giftBannerMedia) {
          setTimeout(() => {
            giftBannerMedia.classList.add("is-visible");
          }, 180);
        }
      }

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25
  }
);

if (giftBannerText) {
  giftBannerObserver.observe(giftBannerText);
}

const processObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const currentStep = entry.target;
      const stepsArray = Array.from(processSteps);
      const stepIndex = stepsArray.indexOf(currentStep);

      setTimeout(() => {
        currentStep.classList.add("is-visible");
      }, stepIndex * 150);

      observer.unobserve(currentStep);
    });
  },
  {
    threshold: 0.2
  }
);

processSteps.forEach((step) => {
  processObserver.observe(step);
});

const ctaObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      if (entry.target.classList.contains("expert-cta__title")) {
        entry.target.classList.add("is-visible");

        if (ctaText) {
          setTimeout(() => {
            ctaText.classList.add("is-visible");
          }, 140);
        }

        if (ctaActions) {
          setTimeout(() => {
            ctaActions.classList.add("is-visible");
          }, 280);
        }
      }

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.25
  }
);

if (ctaTitle) {
  ctaObserver.observe(ctaTitle);
}

const footerObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const allItems = Array.from(footerRevealItems);
      const itemIndex = allItems.indexOf(entry.target);

      setTimeout(() => {
        entry.target.classList.add("is-visible");
      }, itemIndex * 140);

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2
  }
);

footerRevealItems.forEach((item) => {
  footerObserver.observe(item);
});