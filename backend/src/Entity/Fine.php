<?php

namespace App\Entity;

use App\Repository\FineRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FineRepository::class)]
class Fine
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 8, scale: 2)]
    private ?string $fine = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Rental $rental = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFine(): ?string
    {
        return $this->fine;
    }

    public function setFine(string $fine): static
    {
        $this->fine = $fine;

        return $this;
    }

    public function getRental(): ?Rental
    {
        return $this->rental;
    }

    public function setRental(Rental $rental): static
    {
        $this->rental = $rental;

        return $this;
    }
}
