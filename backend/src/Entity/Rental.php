<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\RentalRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RentalRepository::class)]
#[ApiResource]
class Rental
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'rentals')]
    #[ORM\JoinColumn(nullable: false)]
    private ?ToolInstance $toolInstance = null;

    #[ORM\ManyToOne(inversedBy: 'rentals')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $Client = null;

    #[ORM\Column(nullable: true)]
    private ?bool $hasClientCollected = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $returnDate = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $returnToDate = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getToolInstance(): ?ToolInstance
    {
        return $this->toolInstance;
    }

    public function setToolInstance(?ToolInstance $toolInstance): static
    {
        $this->toolInstance = $toolInstance;

        return $this;
    }

    public function getClient(): ?User
    {
        return $this->Client;
    }

    public function setClient(?User $Client): static
    {
        $this->Client = $Client;

        return $this;
    }

    public function isHasClientCollected(): ?bool
    {
        return $this->hasClientCollected;
    }

    public function setHasClientCollected(?bool $hasClientCollected): static
    {
        $this->hasClientCollected = $hasClientCollected;

        return $this;
    }

    public function getReturnDate(): ?\DateTimeInterface
    {
        return $this->returnDate;
    }

    public function setReturnDate(?\DateTimeInterface $returnDate): static
    {
        $this->returnDate = $returnDate;

        return $this;
    }

    public function getReturnToDate(): ?\DateTimeInterface
    {
        return $this->returnToDate;
    }

    public function setReturnToDate(?\DateTimeInterface $returnToDate): static
    {
        $this->returnToDate = $returnToDate;

        return $this;
    }
}
